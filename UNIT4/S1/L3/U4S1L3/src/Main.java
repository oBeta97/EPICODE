import SIM.SIM;
import SIM.Utente;
import SIM.Chiamate;

import java.util.Scanner;

public class Main {
    public static void main(String[] args) {
        System.out.println("Hello world!");

        Scanner scanner = new Scanner(System.in);

        System.out.println("------------------- ESERCIZIO 1 -------------------");
        System.out.println("Inserisci l'altezza e la larghezza di un rettangolo:");
        float altezza = Float.parseFloat(scanner.nextLine());
        float larghezza = Float.parseFloat(scanner.nextLine());
        Rettangolo r = new Rettangolo(altezza, larghezza);
        System.out.println("Rettangolo.stampaRettangolo: " + Rettangolo.stampaRettangolo(r));

        System.out.println(" ");

        System.out.println("Inserisci il numero di rettangoli da creare:");
        int numRettangoli = Integer.parseInt(scanner.nextLine());
        Rettangolo[] rettangoli = new Rettangolo[numRettangoli];
        for(int i = 0; i < numRettangoli; i++) {
            System.out.println("inserisci altezza e larghezza del rettangolo " + (i+1));
            altezza = Float.parseFloat(scanner.nextLine());
            larghezza = Float.parseFloat(scanner.nextLine());
            rettangoli[i] = new Rettangolo(altezza, larghezza);
        }

        System.out.println("Rettangolo.stampaRettangoli: \n" + Rettangolo.stampaRettangoli(rettangoli));

        System.out.println(" ");
        System.out.println("------------------- ESERCIZIO 2 -------------------");

        SIM sim = new SIM(347529561);

        System.out.println(sim.stampa());
        System.out.println(" ");

        while (true) {
            System.out.println("Vuoi inserire una chiamata? (y/n)");
            String risposta = scanner.nextLine();

            if (!risposta.equals("y") && !risposta.equals("n")) continue;
            if (risposta.equals("n")) break;

            System.out.println("Inserisci nome e cognome del mittente:");
            String nome = scanner.nextLine();
            String cognome = scanner.nextLine();
            Utente mittente = new Utente(nome, cognome);

            System.out.println("Inserisci nome e cognome del destinatario:");
            nome = scanner.nextLine();
            cognome = scanner.nextLine();
            Utente destinatario = new Utente(nome, cognome);

            System.out.println("Inserisci la durata della chiamata in secondi:");
            int durata = Integer.parseInt(scanner.nextLine());
            Chiamate newCall = new Chiamate(mittente, destinatario, durata);
            sim.aggiungiChiamata(newCall);
        }

        System.out.println(sim.stampa());


    }
}