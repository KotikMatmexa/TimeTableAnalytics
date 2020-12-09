package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "contingentunit")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class ContingentUnit {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    private String course;

    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(
            name = "currentstudyyear",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private StudyYear currentStudyYear;

    private String name;

    @Column(name = "gcrecord")
    private String GCRecord;

    @Column(name = "divisionsstring")
    private String faculty;

    @Column(name = "studentgroupsstring")
    private String studentGroup;

    @OneToMany(mappedBy = "contingentUnit", fetch = FetchType.LAZY)
    private List<Event> events;

    @OneToMany(mappedBy = "division")
    private List<DivisionsUnits> divisionsUnits;

}
