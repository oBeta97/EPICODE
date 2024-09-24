public class Ex2 {

    public String stringNumber (int number) {
        switch (number){
            case 1:
                return "uno";
            case 2:
                return "due";
            case 3:
                return "tre";
            case 4:
                return "quattro";
            default:
                return "BIFOLCO! un numero da 1 a 4";
        }
    }

    public String splitStringComa (String s) {
        String[] splittedString = s.split(" ");
        String result = "";
        for (String string : splittedString) {
            result = result.concat(string + ", ");
        }
        return result;
    }

    public int[] countToZero (int number) {
        int[] array = new int[number];

        for (int i = number, index = 0; i > 0; i--, index++) {
            array[index] = i;
        }

        return array;
    }

}
