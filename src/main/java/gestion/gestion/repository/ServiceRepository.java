package gestion.gestion.repository;

import gestion.gestion.entities.Service;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface ServiceRepository extends JpaRepository<Service, Long> {
    @Query("select  s from  Service  s order by  s.libelle asc ")
    public Collection<Service> getAll();
}
