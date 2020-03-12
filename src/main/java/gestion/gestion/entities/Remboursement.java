package gestion.gestion.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Remboursement {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    private Double montant;
    private Double commission;
    private Date   date;
    @ManyToOne(fetch = FetchType.EAGER)
    private Vendeur vendeur;
    @ManyToOne(fetch = FetchType.EAGER)
    private Service service;

    public Remboursement() {
    }

    public Remboursement(Double montant, Double commission, Date date) {
        this.montant = montant;
        this.commission = commission;
        this.date = date;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Long getId() {
        return id;
    }


    public Double getMontant() {
        return montant;
    }

    public Double getCommission() {
        return commission;
    }

    public void setMontant(Double montant) {
        this.montant = montant;
    }

    public void setCommission(Double commission) {
        this.commission = commission;
    }

    public Vendeur getVendeur() {
        return vendeur;
    }

    public void setVendeur(Vendeur vendeur) {
        this.vendeur = vendeur;
    }

    public Service getService() {
        return service;
    }

    public void setService(Service service) {
        this.service = service;
    }
}
