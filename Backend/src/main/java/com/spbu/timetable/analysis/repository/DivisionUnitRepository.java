package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.ContingentUnit;
import com.spbu.timetable.analysis.model.DivisionsUnits;
import com.spbu.timetable.analysis.model.DivisionsUnitsKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DivisionUnitRepository extends JpaRepository<DivisionsUnits, DivisionsUnitsKey> {

    @Query("select cu From ContingentUnit cu  where cu.divisionId =?1 and cu.currentStudyYear.oid =?2" +
           " and cu.objectType = ?3 order by cu.name")
    List<ContingentUnit> findAllByDivisionOid(String divisionOid, String yearOid, int objectType);

    @Query("select distinct cu.objectType From ContingentUnit cu where cu.divisionId =?1 " +
            "and cu.currentStudyYear.oid =?2")
        // " and cu.objectType = ?3 ")
    List<Object> findAllByDivisiOid(String divisionOid, String yearOid, int objectType);

}
