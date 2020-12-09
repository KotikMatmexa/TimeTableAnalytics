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

    @Query("select cu From ContingentUnit cu JOIN DivisionsUnits du on" +
            " cu.oid = du.contingentUnit.oid join Division div on" +
            " du.division.oid = div.oid where div.oid =?1 and cu.currentStudyYear.oid =?2")
    List<ContingentUnit> findAllByDivisionOidAndContingentUnitCurrentStudyYearOid(String divisionOid, String yearOid);
}
