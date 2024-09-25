public class Rettangolo {

    private float altezza;
    private float larghezza;
    
    public Rettangolo(float altezza, float larghezza) {
        setAltezza(altezza);
        setLarghezza(larghezza);
    }

    public float area() {
        return getAltezza() * getLarghezza();
    }

    public float perimetro() {
        return 2 * (getAltezza() + getLarghezza());
    }

    public static String stampaRettangolo(Rettangolo ret){
        return "Area: " + ret.area() + " Perimetro: " + ret.perimetro();
    }

    public static String stampaRettangoli(Rettangolo[] retArr){
        String res = "";
        float areaTot = 0;
        float periTot = 0;

        for(int i = 0; i < retArr.length; i++) {
            res += "rettangolo nr " + (i+1) + ": " + stampaRettangolo(retArr[i]) + "\n";
            areaTot += retArr[i].area();
            periTot += retArr[i].perimetro();
        }

        res += "tot area: " + areaTot + " tot perimetro: " + periTot;

        return res;
    }

    public float getAltezza() {
        return altezza;
    }

    public void setAltezza(float altezza) {
        this.altezza = altezza;
    }

    public float getLarghezza() {
        return larghezza;
    }

    public void setLarghezza(float larghezza) {
        this.larghezza = larghezza;
    }


}
