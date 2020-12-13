package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "locationeducator")
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

    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(
            name = "educatoremployment",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private EducatorEmployment educatorEmployment;

    @Column(name = "gcrecord")
    private String GCRecord;

    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(
            name = "eventlocation",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private EventLocation eventLocation;

//
//    private EducatorAssignmentUnit educatorAssignmentUnit
}
