package es.ing;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;

class Password {

    public static void main(String[] args) throws IOException {
        String fileName = "src/main/resources/sample1.txt";
        //String fileName = "/input";

        File f=new File(fileName);
        f.getAbsolutePath();
        String path = f.getAbsolutePath();
        String data = Files.readString(Path.of(path));

        //System.out.println(data);

        PasswordAlgorithm algorithm = new Algorithm();
        System.out.println("Password:" + algorithm.getPassword(data));

    }

}
