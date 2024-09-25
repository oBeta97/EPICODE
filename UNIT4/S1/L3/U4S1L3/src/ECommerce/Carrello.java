package ECommerce;

import java.util.ArrayList;

public class Carrello {
    private Cliente cliente;
    private ArrayList<Articolo> articoli;
    private float totale;


    // Constructors
    public Carrello(Cliente cliente, ArrayList<Articolo> articoli) {
        this.cliente = cliente;
        this.articoli = articoli;
        this.totale = calcolaTotale();
    }

    // Getters and Setters
    public Cliente getCliente() {
        return this.cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

    public ArrayList<Articolo> getArticoli() {
        return this.articoli;
    }

    public void setArticoli(ArrayList<Articolo> articoli) {
        this.articoli = articoli;
        this.totale = calcolaTotale(); // Update the total when items are set
    }

    public void addToCart(Articolo a) {
        ArrayList<Articolo> articoli = this.getArticoli();
        articoli.add(a);
        this.setArticoli(articoli);
    }

    public float getTotale() {
        return this.totale;
    }

    // Private method to calculate the total of the cart
    private float calcolaTotale() {
        float totale = 0;
        if (this.articoli != null) {
            for (Articolo articolo : this.articoli) {
                totale += articolo.getPrezzo() * articolo.getQuantita();
            }
        }
        return totale;
    }

    @Override
    public String toString() {
        StringBuilder sb = new StringBuilder();
        sb.append("Carrello{")
                .append("cliente=").append(this.cliente)
                .append(", articoli=[");

        if (this.articoli != null) {
            for (Articolo articolo : this.articoli) {
                sb.append(articolo.toString()).append(", ");
            }
            if (!this.articoli.isEmpty()) {
                sb.setLength(sb.length() - 2); // Remove the last comma and space
            }
        }

        sb.append("], totale=").append(this.totale)
                .append('}');

        return sb.toString();
    }
}
