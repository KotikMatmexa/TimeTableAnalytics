package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EventRepository extends JpaRepository<Event, String> {
    @Query("SELECT ev FROM Event ev join EventLocation el on ev.oid = el.event.oid " +
            "JOIN Location loc on el.location.oid =loc.oid WHERE ev.start >= ?1 " +
            "and ev.endDate <=?2 " +
            "and ev.GCRecord = null and loc.oid =?3 ORDER BY ev.start")
    List<Event> findAllByEventStartAndLocationOid(LocalDateTime start, LocalDateTime end_date, String locationId);

}
