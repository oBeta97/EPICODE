package SIM;

public class SIM {

    private long numero;
    private float creditoResiduo;
    private Chiamate[] chiamate;

    // Costruttore
    public SIM(long numero) {
        setNumero(numero);
        setCreditoResiduo(0);
        setChiamate(new Chiamate[5]);
    }

    public SIM(int numero, float creditoResiduo, Chiamate[] chiamate) {
        setNumero(numero);
        setCreditoResiduo(creditoResiduo);
        setChiamate(chiamate);
    }

    public String stampa() {
        String res = "";
        String chiamateString = "";

        for(int i = 0; i < chiamate.length; i++) {
            if ( getChiamata(i) != null)
                chiamateString += "chiamata " + (i+1) + ": \n" + getChiamata(i).stampa() + "\n";
        }

        res = "Numero SIM: " + getNumero() + "\n" +
            "Credito residuo: " + getCreditoResiduo() + "\n" +
            "Elenco chiamate: \n" + (!chiamateString.equals("") ? chiamateString : "nessuna chiamata");

        return res;

    }

    public void aggiungiChiamata(Chiamate ch) {
        for (int i = 0; i < chiamate.length; i++) {
            if (chiamate[i] == null) {
                chiamate[i] = ch;
                break;
            }
        }
    }

    // Getter e setter
    public long getNumero() {
        return this.numero;
    }

    public void setNumero(long numero) {
        this.numero = numero;
    }

    public float getCreditoResiduo() {
        return this.creditoResiduo;
    }

    public void setCreditoResiduo(float creditoResiduo) {
        this.creditoResiduo = creditoResiduo;
    }

    public Chiamate[] getChiamate() {
        return this.chiamate;
    }

    public Chiamate getChiamata(int i) {
        return this.chiamate[i];
    }

    public void setChiamate(Chiamate[] chiamate) {
        this.chiamate = chiamate;
    }

}
