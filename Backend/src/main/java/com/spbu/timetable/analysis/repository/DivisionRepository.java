package com.spbu.timetable.analysis.repository;

import com.spbu.timetable.analysis.model.ContingentUnit;
import com.spbu.timetable.analysis.model.Division;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface DivisionRepository extends JpaRepository<Division, String> {

    @Query("SELECT div.oid, div.name FROM Division div")
    List<Object[]> findAllSpecificFields();

}
