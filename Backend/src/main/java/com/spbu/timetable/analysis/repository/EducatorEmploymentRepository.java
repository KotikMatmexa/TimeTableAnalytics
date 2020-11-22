package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.EducatorEmployment;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;


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
}
