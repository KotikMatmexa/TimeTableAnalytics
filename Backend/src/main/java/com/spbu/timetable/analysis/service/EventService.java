package com.spbu.timetable.analysis.service;

import com.spbu.timetable.analysis.model.Event;
import com.spbu.timetable.analysis.repository.EventRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;

@Service
@Transactional
@RequiredArgsConstructor(onConstructor = @__(@Autowired))
public class EventService {


    private final EventRepository eventRepository;

    public List<Event> getEventByLocationIdBetweenDates(String locationId, LocalDateTime start, LocalDateTime end) {
        return eventRepository.findAllByEventStartAndLocationOid(start, end, locationId);
    }
}
