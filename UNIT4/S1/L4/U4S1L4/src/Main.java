import java.util.ArrayList;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        System.out.println("---------------- EX1 ----------------");

        DipendenteFullTime gino = new DipendenteFullTime("gino", Dipartimenti.PRODUZIONE);
        DipendenteFullTime pino = new DipendenteFullTime("pino", Dipartimenti.VENDITE);
        DipendenteFullTime nino = new DipendenteFullTime("nino", Dipartimenti.AMMINISTRAZIONE);

        DipendentePartTime tino = new DipendentePartTime("tino", Dipartimenti.PRODUZIONE);
        DipendentePartTime mino = new DipendentePartTime("mino", Dipartimenti.VENDITE);
        DipendentePartTime bino = new DipendentePartTime("bino", Dipartimenti.AMMINISTRAZIONE);

        Dirigente dino = new Dirigente("dino", Dipartimenti.PRODUZIONE);
        Dirigente vino = new Dirigente("vino", Dipartimenti.VENDITE);
        Dirigente rino = new Dirigente("rino", Dipartimenti.AMMINISTRAZIONE);

        Volontario hino = new Volontario("hino", Dipartimenti.PRODUZIONE, (short) 25);
        Volontario yino = new Volontario("yino", Dipartimenti.VENDITE, (short) 27);
        Volontario wino = new Volontario("wino", Dipartimenti.AMMINISTRAZIONE, (short) 54);

        gino.calculateSalary(12.0f);
        pino.calculateSalary(10.5f);
        nino.calculateSalary(13.1f);

        tino.calculateSalary(8.7f);
        mino.calculateSalary(14.2f);
        bino.calculateSalary(9.4f);

        dino.calculateSalary(25.0f);
        vino.calculateSalary(22.8f);
        rino.calculateSalary(19.7f);

        hino.calculateSalary(0f);
        yino.calculateSalary(0f);
        wino.calculateSalary(0f);

        ArrayList<Dipendente> dipendenti = new ArrayList<Dipendente>();
        dipendenti.add(gino);
        dipendenti.add(nino);
        dipendenti.add(pino);

        dipendenti.add(tino);
        dipendenti.add(mino);
        dipendenti.add(bino);

        dipendenti.add(dino);
        dipendenti.add(vino);
        dipendenti.add(rino);

        dipendenti.add(hino);
        dipendenti.add(yino);
        dipendenti.add(wino);

        for(Dipendente d : dipendenti){
            System.out.println(d.toString());
            d.checkIn();
            System.out.println(" ");
        }

    }
}