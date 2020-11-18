package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.EducatorEmployment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface EducatorEmploymentRepository extends JpaRepository<EducatorEmployment, String> {

    //TODO: implement proper query for getting all teachers by address
//    @Query("SELECT edEmp FROM EducatorEmployment edEmp join EventLocation el on ev.oid = el.event.oid " +
//            "JOIN Location loc on el.location.oid =loc.oid WHERE ev.start >= ?1 " +
//            "and ev.endDate <=?2 " +
//            "and ev.GCRecord = null and loc.oid =?3 ORDER BY ev.start")
    List<EducatorEmployment> findAllEducatorsByAddressAndLocations(String addressId);
}
