package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.model.Event;
import com.spbu.timetable.analysis.repository.EventRepository;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.time.LocalDateTime;
import java.util.List;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class EventServiceTests {
	@Mock
    EventRepository eventRepository;
	
	@InjectMocks
    EventService eventService;
	
	@Test
    public void getEventByLocationIdBetweenDates() {
        LocalDateTime start = LocalDateTime.now();
        LocalDateTime end = start.plusDays(1);
        eventService.getEventByLocationIdBetweenDates("1", start, end);
        verify(eventRepository).findAllByEventStartAndLocationOid(start, end, "1");
    }
}
