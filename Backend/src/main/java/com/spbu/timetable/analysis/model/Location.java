package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "Location")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class Location {
    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    @Column(name = "id")
    private int intId;

   // private LocationKind locationKind;

    @Column(name = "locationkindcode")
    private String locationKindCode;


    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.LAZY)
    @JoinColumn(
            name = "address",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private Address address;

    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(
            name = "floor",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private Floor floor;

    @Column(name = "additionalinfo")
    private String AdditionalInfo;

    @Column(name = "gcrecord")
    private String GCRecord;

    @Column(name = "numberactual")
    private String numberActual;

   // private ClassroomKind classroomKind;

    @Column(name = "multimediaequipment")
    private Integer multimediaEquipment;

    @Column(name = "labwareequipment")
    private Integer labwareEquipment;

    private Integer capacity;

    private Float square;

    private String name;

    @Column(name = "displayname1")
    private String displayName1;

    @Column(name = "displaynameenglish1")
    private String displayNameEnglish1;

    @Column(name = "displayname2")
    private String displayName2;

    @Column(name = "displaynameenglish2")
    private String displayNameEnglish2;

    @Column(name = "computerscount")
    private Integer computersCount;

    @OneToMany(mappedBy = "location", fetch = FetchType.LAZY)
    private List<EventLocation> eventLocation;
}
