package ECommerce;

import java.util.ArrayList;

public class Articolo{
    private int id;
    private String descrizione;
    private float prezzo;
    private int quantita;

    public Articolo(String descrizione, float prezzo, int quantita) {
        this.setId(hashCode());
        this.setDescrizione(descrizione);
        this.setPrezzo(prezzo);
        this.setQuantita(quantita);
    }

    public int getId() {
        return this.id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getDescrizione() {
        return this.descrizione;
    }

    public void setDescrizione(String descrizione) {
        this.descrizione = descrizione;
    }

    public float getPrezzo() {
        return this.prezzo;
    }

    public void setPrezzo(float prezzo) {
        this.prezzo = prezzo;
    }

    public int getQuantita() {
        return this.quantita;
    }

    public void setQuantita(int quantita) {
        this.quantita = quantita;
    }

    @Override
    public String toString() {
        return "Articolo{" +
                "id=" + id +
                ", descrizione='" + descrizione + '\'' +
                ", prezzo=" + prezzo +
                ", quantita=" + quantita +
                '}';
    }
}
