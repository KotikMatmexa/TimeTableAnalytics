package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.dto.EventsDto;
import com.spbu.timetable.analysis.dto.ListForDto;
import com.spbu.timetable.analysis.dto.LocationDtoShort;
import com.spbu.timetable.analysis.dto.LocationWithEventsDto;
import com.spbu.timetable.analysis.model.Event;
import com.spbu.timetable.analysis.model.Location;
import com.spbu.timetable.analysis.repository.LocationRepository;
import com.spbu.timetable.analysis.utils.DtoMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Objects;
import java.util.stream.Collectors;

import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.mockito.Mockito.verify;

@RunWith(MockitoJUnitRunner.class)
public class LocationServiceTests {
	@Mock
    LocationRepository locationRepository;

	@Mock
    EventService eventService;
	
	@InjectMocks
    LocationService locationService;
	
	@Test
    public void getById() {
        locationService.getById("1");
        verify(locationRepository).findById("1");
    }
}
