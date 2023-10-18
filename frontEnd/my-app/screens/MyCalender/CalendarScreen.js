import React, { useState , useEffect } from 'react';
import { Modal, Text, TextInput, Button, View , Image } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { FAB } from 'react-native-paper';
import { styles } from './styles'; 
import AsyncStorage from '@react-native-async-storage/async-storage';




LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
};

LocaleConfig.defaultLocale = 'en';

export default function CalendarScreen({ visible, onClose, onAddEvent }) {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHod, setselectedHod] = useState('');
  const [comments, setComments] = useState({}); // Store comments for each date
  const [isEventFormVisible, setIsEventFormVisible] = useState(true);
  const [isHolidayFormVisible, setIsHolidayFormVisible] = useState(false);
  const [calendarMarkings, setCalendarMarkings] = useState({});

  useEffect(() => {
    // Load events and holidays data from AsyncStorage when the component mounts
    loadEventsAndHolidays().then((data) => {
      setComments(data.comments || {});
      setCalendarMarkings(data.calendarMarkings || {});
    });
  }, []);

  // Function to load events and holidays from AsyncStorage
  const loadEventsAndHolidays = async () => {
    try {
      const eventsAndHolidays = await AsyncStorage.getItem('eventsAndHolidays');
      return eventsAndHolidays ? JSON.parse(eventsAndHolidays) : {};
    } catch (error) {
      console.error('Error loading data: ', error);
      return {};
    }
  };

  // Function to save events and holidays to AsyncStorage
  const saveEventsAndHolidays = async (data) => {
    try {
      await AsyncStorage.setItem('eventsAndHolidays', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data: ', error);
    }
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setIsEventFormVisible(true);
    setIsHolidayFormVisible(false);
  };

  const onDayLongPress = (day) => {
    setselectedHod(day.dateString);
    setIsHolidayFormVisible(true);
    setIsEventFormVisible(false);
  };

  const handleAddEvent = () => {
    const newCalendarMarkings = {
      ...calendarMarkings,
      [selectedDate]: { selected: true, selectedColor: 'red', eventName: 'Event' },
    };

    // Save events and holidays data to AsyncStorage when an event is added
    saveEventsAndHolidays({ comments, calendarMarkings: newCalendarMarkings });

    setCalendarMarkings(newCalendarMarkings);
    setIsEventFormVisible(true);
  };

  const handleAddHoliday = () => {
    const newCalendarMarkings = {
      ...calendarMarkings,
      [selectedHod]: { selected: true, selectedColor: 'green', eventName: 'Holiday' },
    };

    // Save events and holidays data to AsyncStorage when a holiday is added
    saveEventsAndHolidays({ comments, calendarMarkings: newCalendarMarkings });

    setCalendarMarkings(newCalendarMarkings);
    setIsHolidayFormVisible(true);
  };

  const handleCommentChange = (text) => {
    const newComments = { ...comments, [selectedDate]: text };

    // Save events and holidays data to AsyncStorage when a comment is added
    saveEventsAndHolidays({ comments: newComments, calendarMarkings });

    setComments(newComments);
  };

  return (
    <View  style={{ flex: 1, backgroundColor: 'white' }} animationType="slide" transparent={false} visible={visible}>
      <View style={styles.container}>
        <Calendar 
          onDayPress={onDayPress}
          onDayLongPress={onDayLongPress}
          markedDates={calendarMarkings}
        />

        {isEventFormVisible && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.absent}>Absent</Text>

            <EventForm
              onAddEvent={handleAddEvent}
              title="Add Event"
              backgroundColor="red"
            />
          </View>
        )}

        {isHolidayFormVisible && (
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.hld}>Holiday</Text>

            <EventForm
              onAddEvent={handleAddHoliday}
              title="Add Holiday"
              backgroundColor="green"
            />
          </View>
        )}

      
      </View>

      <View>
      
        {comments[selectedDate] && (
          <Text style={styles.commentText}>{comments[selectedDate]}</Text>
        )}

        {isHolidayFormVisible && (
          <TextInput
            style={styles.commentInput}
            onChangeText={handleCommentChange}
            value={comments[selectedDate]}
          />
        )}

      </View>
    </View>
  );
}

const EventForm = ({ visible, onClose, onAddEvent, backgroundColor }) => {
  const fabStylePlus = { ...styles.fab, backgroundColor };
  const fabStyleCounter = { ...styles.fab2, backgroundColor };

  return (
    <View animationType="slide" transparent={false} visible={visible}>
      <View style={styles.modalContainer}>
        <FAB
          style={fabStylePlus}
          icon="plus"
          onPress={onAddEvent}
        />
        <FAB style={styles.fab3}></FAB>
        <FAB style={fabStyleCounter}></FAB>
      </View>
    </View>
  );
};