package com.spbu.timetable.analysis.model;

import com.sun.istack.NotNull;
import lombok.*;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "eventlocation")
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder(toBuilder = true)
public class EventLocation {

    @Id
    @NotNull
    @Column(name = "oid")
    private String oid;

    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(
            name = "location",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private Location location;

    @ManyToOne(cascade = javax.persistence.CascadeType.ALL, fetch = FetchType.EAGER)
    @JoinColumn(
            name = "event",
            referencedColumnName = "oid",
            insertable = false, updatable = false
    )
    private Event event;

    @OneToMany(mappedBy = "eventLocation", fetch = FetchType.LAZY)
    private List<LocationEducator> locationEducator;
}
