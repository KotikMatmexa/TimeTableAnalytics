package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.dto.EducatorsDto;
import com.spbu.timetable.analysis.dto.EducatorsWithEventsDto;
import com.spbu.timetable.analysis.dto.EventsDto;
import com.spbu.timetable.analysis.dto.ListForDto;
import com.spbu.timetable.analysis.model.EducatorEmployment;
import com.spbu.timetable.analysis.model.Event;
import com.spbu.timetable.analysis.repository.EducatorEmploymentRepository;
import com.spbu.timetable.analysis.utils.DateTimeFormatter;
import com.spbu.timetable.analysis.utils.DtoMapper;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.data.domain.Pageable;
import java.lang.IllegalArgumentException;
import java.lang.NullPointerException;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Arrays;
import java.util.stream.Collectors;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertThat;
import static org.hamcrest.CoreMatchers.instanceOf;
import static org.mockito.Mockito.*;

@RunWith(MockitoJUnitRunner.class)
public class EducatorEmploymentServiceTests {
	@Mock
    EducatorEmploymentRepository educatorEmploymentRepository;
	
	@InjectMocks
    EducatorEmploymentService educatorEmploymentService;
	
	
	@Test(expected = java.lang.NullPointerException.class)
    public void getAllEducatorsByAddress() {
		educatorEmploymentService.getAllEducatorsByAddress(1, 1, "1");
		verify(educatorEmploymentRepository).findAllEducatorsByAddress("1", any(Pageable.class));
    }
	
	@Test(expected = java.lang.IllegalArgumentException.class)
    public void getAllEducatorsEvents() {
		String educatorId = "1";
		String start = "2020-12-10 08:00";
		String end = "2020-12-10 09:00";
        educatorEmploymentService.getAllEducatorsEvents(educatorId, start, end);
        verify(educatorEmploymentRepository).findEducatorById(educatorId);
    }
}