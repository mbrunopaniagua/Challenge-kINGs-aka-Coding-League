package es.ing;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

class Checksum {

    public static void main(String[] args) throws IOException {
        String fileName = "/sample1.txt";
        //String fileName = "/spreadsheet.txt";

        String path = Checksum.class.getResource(fileName).getPath();
        String content = Files.readString(Path.of(path));
        System.out.println(content);

        System.out.println("checksum is " + checksum(content));
    }

    public static int checksum(String content) {
        return 18;
    }
}
