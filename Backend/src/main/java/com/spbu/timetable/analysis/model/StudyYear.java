package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "studyyear")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class StudyYear {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    @Column(name = "displayname")
    private String displayName;

    private LocalDateTime start;

    @OneToMany(mappedBy = "currentStudyYear", fetch = FetchType.LAZY)
    private List<ContingentUnit> contingentUnitList;
}
