## Instructions

KeyVaults are obsolete, the future is to keep all our secrets inside Russian Dolls.
You have been selected to our first beta implementation: 
[checksum.zip](./resources/checksum.zip)

And although it may sound cliché, we have news for you, good and bad. Which ones would you prefer first?
Actually, it doesn't matter what you answer.

The good news is that the password is encoded in the metadata of a spreadsheet. 

The bad news is that the spreadsheet is corrupted, and you will need to manually recover that information.
To obtain the key, you have to calculate the checksum of the values that have been recovered from the spreadsheet.

The spreadsheet consists of rows of apparently-random numbers. 
To calculate the spreadsheet's checksum try this:

For each row, determine the difference between the largest value and the smallest value; 
the checksum is the sum of all of these differences.

For example, given the following sample spreadsheet: [sample1.txt](./resources/sample1.txt)

```
5 1 9 5
7 5 3
2 4 6 8
```

The first row's largest and smallest values are 9 and 1, and their difference is 8.
The second row's largest and smallest values are 7 and 3, and their difference is 4.
The third row's difference is 6.
In this example, the spreadsheet's checksum would be 8 + 4 + 6 = 18.

You can find the corrupted spreadsheet here: [spreadsheet.txt](./resources/spreadsheet.txt)

