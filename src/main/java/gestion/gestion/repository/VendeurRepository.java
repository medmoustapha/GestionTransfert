package gestion.gestion.repository;

import gestion.gestion.entities.Vendeur;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Collection;

public interface VendeurRepository extends JpaRepository<Vendeur, Long> {
    @Query("select v from Vendeur v order by v.nomPrenom asc")
    public Collection<Vendeur> getdAll();
}
