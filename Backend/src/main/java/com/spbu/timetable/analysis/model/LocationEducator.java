package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "Locationeducator")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class LocationEducator {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    @OneToMany
    private EducatorEmployment locationKindCode;

    @Column(name = "gcrecord")
    private String GCRecord;

    @OneToMany
    private EventLocation eventLocation;

//
//    private EducatorAssignmentUnit educatorAssignmentUnit
}
