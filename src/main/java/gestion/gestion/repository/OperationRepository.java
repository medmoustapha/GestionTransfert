package gestion.gestion.repository;

import gestion.gestion.entities.Operation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Collection;

public interface OperationRepository  extends JpaRepository<Operation, Long> {
    @Query("select p from Operation  p where p.type =:x")
    public Collection<Operation> getOperationByType(@Param("x")String type);
}
