package gestion.gestion.repository;

import gestion.gestion.entities.Versement;
import org.springframework.data.jpa.repository.JpaRepository;

public interface VersementRepository extends JpaRepository<Versement, Long> {
}
