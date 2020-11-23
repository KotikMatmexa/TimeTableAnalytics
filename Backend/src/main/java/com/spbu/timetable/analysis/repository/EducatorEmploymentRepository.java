package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.EducatorEmployment;
import com.spbu.timetable.analysis.model.Event;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


import java.time.LocalDateTime;
import java.util.List;

@Repository
public interface EducatorEmploymentRepository extends JpaRepository<EducatorEmployment, String> {

    @Query("SELECT edEmp FROM EducatorEmployment edEmp " +
            " join Position pos on edEmp.position.oid = pos.oid" +
            " join LocationEducator locEd on edEmp.oid = locEd.educatorEmployment.oid" +
            " join EventLocation el on locEd.eventLocation.oid = el.oid " +
            " join Location loc on el.location.oid = loc.oid " +
            "join Address  adr on loc.address.oid = adr.oid " +
            "where adr.oid = ?1 and edEmp.GCRecord = null")
    Page<EducatorEmployment> findAllEducatorsByAddress(String addressId, Pageable pageable);

    @Query("SELECT ev,cu FROM EducatorEmployment edEmp " +
            " join Position pos on edEmp.position.oid = pos.oid" +
            " join LocationEducator locEd on edEmp.oid = locEd.educatorEmployment.oid" +
            " join EventLocation el on locEd.eventLocation.oid = el.oid " +
            " join Event ev on el.event.oid = ev.oid " +
            " join ContingentUnit cu on ev.contingentUnit.oid = cu.oid " +
            "WHERE ev.start >= ?1 and ev.endDate <=?2 " +
            "and ev.GCRecord = null and edEmp.oid =?3 ORDER BY ev.start")
    List<Event> findAllEducatorsEvents(LocalDateTime start, LocalDateTime end_date,
                                       String educatorsId);

    @Query("SELECT edEmp FROM EducatorEmployment edEmp " +
            " join Position pos on edEmp.position.oid = pos.oid" +
            " and edEmp.GCRecord = null and edEmp.oid =?1")
    EducatorEmployment findEducatorById(String oid);
}
