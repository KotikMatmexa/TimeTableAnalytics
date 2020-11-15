package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.EventLocation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventLocationRepository extends JpaRepository<EventLocation, String> {
}
