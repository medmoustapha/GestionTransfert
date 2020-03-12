package gestion.gestion.entities;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Operation {
    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    private Long id;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinTable(name = "Envoi_Vendeur",
            joinColumns = {@JoinColumn(name = "idEnv")},
            inverseJoinColumns = {@JoinColumn(name = "id_Vendeur")})
    private Vendeur vendeur1;
    @ManyToOne(fetch = FetchType.EAGER)
    @JoinTable(name = "Recevoir_Vendeur",
            joinColumns = {@JoinColumn(name = "idEnv")},
            inverseJoinColumns = {@JoinColumn(name = "id_Vendeur")})
    private Vendeur vendeur2;
    private String destinateur;
    private Double montant;
    private Double commission;
    private String type;
    private Date date;

    public Operation() {
    }

    public Operation(String destinateur, Double montant, Double commission, String type, Date date) {
        this.destinateur = destinateur;
        this.montant = montant;
        this.commission = commission;
        this.type = type;
        this.date = date;
    }

    public Operation(Vendeur vendeur1, Vendeur vendeur2, String destinateur, Double montant, Double commission, String type, Date date) {
        this.vendeur1 = vendeur1;
        this.vendeur2 = vendeur2;
        this.destinateur = destinateur;
        this.montant = montant;
        this.commission = commission;
        this.type = type;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public Vendeur getVendeur1() {
        return vendeur1;
    }



    public String getDestinateur() {
        return destinateur;
    }

    public Double getMontant() {
        return montant;
    }

    public Double getCommission() {
        return commission;
    }

    public void setVendeur1(Vendeur vendeur1) {
        this.vendeur1 = vendeur1;
    }



    public void setDestinateur(String destinateur) {
        this.destinateur = destinateur;
    }

    public void setMontant(Double montant) {
        this.montant = montant;
    }

    public void setCommission(Double commission) {
        this.commission = commission;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public Vendeur getVendeur2() {
        return vendeur2;
    }

    public void setVendeur2(Vendeur vendeur2) {
        this.vendeur2 = vendeur2;
    }
}
