public class Ex1 {

    public boolean isEvenString(String s) {
        return s.length() % 2 == 0;
    }

    public boolean isLeapYear(int year) {
        return year % 4 == 0 || year % 400 == 0 && year % 100 != 0;
    }
}
