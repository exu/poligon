/*PROGRAM: SLOWNY ZAPIS LICZB

AUTOR: Grzegorz D.

Program do reprezentacji liczb w zapisie słownym. Do konwersji liczb
sluzy funkcja 'slownie'. Konwertuje liczbe zapisana w postaci lancucha znakow

    int slownie(char* liczba, char* str);

    parametry:
    char* liczba - liczba do konwersji
    char* str - lancuch w ktorym ma byc zapisany wynik konwersji

Funkcja zwraca ilosc poprawnie odczytanych i skonwertowanych cyfr lancucha 'liczba'.
Liczba moze sie skladac maksymalnie z 27 cyfr dziesietnych.
Najdłuższy możliwy zapis słowny jest długi na dokładnie 400 znaków.


Ogolny schemat dzialania funkcji 'slownie':
    Najpierw liczba zamieniana jest na tablice cyfr, cyfry zapisane sa w tej
    tablicy w odwrotnej kolejnosci. Funkcja konwertuje cyfry trojkami -
    kazdej trojce cyfr odpowiada rzad wielkosci (tysiace, miliony itp.).
    Dla kazdego rzedu wielkosci (zaczynajac od najwiekszego) najpierw
    konwertowane sa jego trzy cyfry (setek dziesiatek i jednosci), pozniej
    dopisana jest nazwa rzedu wielkosci w odpowiedniej formie zdaniowej.


Konwersja trzech cyfr odbywa sie za pomoca funkcji 'sdj'

    int sdj(int s, int d, int j, char* str);

    parametry:
    int s, int d, int j - cyfry setek, dziesiatek, jednosci
    char* str - lancuch do ktorego maja byc dopisane slowa

Funkcja zwraca numer formy zdaniowej jakiej nalezy uzyć
    0 - braku formy zdaniowej, oznacza ze nie nalezy nic wypisywac (sdj = 000)
    1 - mianownik liczby pojedynczej (tysiac, milion itp., sdj = 001)
    2 - mianownik liczby mnogiej (tysiace, miliony itp., sdj = *02, *03, *04 gdzie * oznacza dowolna cyfre)
    3 - dopelniacz liczby mnogiej (tysiecy, milionow itp., dla reszty sdj)
*/

#include <stdio.h>
#include <string.h>

//tablice przechowujace nazwy odpowiadajace poszczegolnym cyfrom setek, dziesiatek i jednosci
//indeksy w tablicy odpowiadaja cyfrom, z jakimi te nazwy są skojarzone
//cyfrze 0 odpowiada pusty napis ( nie piszemy np. zero tysiecy )

char* setki[10] = {"", "sto ", "dwiescie ", "trzysta ", "czterysta ", 
"piecset ", "szescset ", "siedemset ", "osiemset ", "dziewiecset "};

char* nastki[10] = {"dziesiec ", "jedenascie ", "dwanascie ", "trzynascie ", "czternascie ", 
"pietnascie ", "szesnascie ", "siedemnascie ", "osiemnascie ", "dziewietnascie "};

char* dziesiatki[10] = { "", "dziesiec ", "dwadziescia ", "trzydziesci ", "czterdziesci ", 
"piecdziesiat ", "szescdziesiat ", "siedemdziesiat ", "osiemdziesiat ", "dziewiecdziesiat "};

char* jednosci[10] = {"", "jeden ", "dwa ", "trzy ", "cztery ", 
"piec ", "szesc ", "siedem ", "osiem ", "dziewiec "};

//dwuwymiarowa tablica przechowujaca nazwy wielkosci
//pierwszy indeks odpowiada rzedowi wielkosci
//drugi indeks odpowiada formie zdaniowej
char* wielkosci[][4] = 
{
   {"", "jeden", "", ""}, //w przypadku jedynek wypisywana jest tylko forma zdaniowa (np. "tysiac", nie "jeden tysiac"), jedynie dla rzedu 0 (nie posiada formy zdaniowej) ma byc wypisana jedynka, w tym celu uzyta zostanie pierwsza forma zdaniowa rzedu 0 ustawiona na "jeden"
   {"", "tysiac ", "tysiace ", "tysiecy "}, 
   {"", "milion ", "miliony ", "milionow "}, 
   {"", "miliard ", "miliardy ", "miliardow "}, 
   {"", "bilion ", "biliony ", "bilionow "}, 
   {"", "biliard ", "biliardy ", "biliardow "}, 
   {"", "trylion ", "tryliony ", "trylionow "}, 
   {"", "tryliard ", "tryliardy ", "tryliardow "}, 
   {"", "kwadrylion ", "kwadryliony ", "kwadrylionow "}
};

//wypisuje slownie liczbe setek dziesiatek i jednosci
//oraz zwraca ktora forme zdaniowa uzyc
int sdj(int s, int d, int j, char* str)
{
   if((d == 0) && (s == 0))
   {
      if(j == 0) return 0; //w przypadku zera nie wypisujemy nic, zerowa forma zdaniowa (brak nazwy wielkosci)
      if(j == 1) return 1; //w przypadku jedynki wypisujemy jedynie forme zdaniowa wielkosci (pierwszą)
   }
   strcat(str, setki[s]); //cyfrze setek odpowiada tablica 'setki'
   if(d == 1) //jeśli cyfra dziesątek to 1, wtedy wypisujemy nastke
      strcat(str, nastki[j]); //cyfra jednosci decyduje o tym ktora to nastka w tablicy 'nastki'
   else
   {
      strcat(str, dziesiatki[d]); //cyfrze dziesiatek odpowiada tablica 'dziesiatki'
      strcat(str, jednosci[j]); //cyfrze jednosci odpowiada tablica 'jednosci'
   }
   if((d != 1) && (j >= 2) && (j <= 4)) return 2; //liczby konczace sie na 2, 3, 4 (oprocz nastek) mają drugą forme zdaniową
   return 3; //pozostałe liczby mogą mieć już tylko trzecią formę zdaniową
}

//zamienia liczbe w postaci lancucha cyfr (parametr liczba) na liczbe w zapisie slownym (zapisuje w lancuchu str)
int slownie(char* liczba, char* str)
{
   int ilosc = 0; //ilosc cyfr liczby 'liczba'
   unsigned char cyfry[27] = {0}; //'liczba' w postaci tablicy kolejnych cyfr dziesietnych, narazie wypelniona zerami
   int forma; //forma zdaniowa wielkosci
   int i; //licznik petli
   unsigned tmp; //zmienna tymczasowa uzyta przy zamianie cyfr miejscami

   //w tej petli cyfry dziesietne w postaci znakow zostają zamieniona na cyfry w postaci liczb oraz liczona jest ich ilosc
   //znaki są zamieniane przez odjęcie znaku '0' ('0' - '0' = 0, '1' - '0' = 1, '2' - '0' = 2 itd.)
   ilosc = strlen(liczba);
   for(i = 0;i < ilosc;i++)
   {
      tmp = liczba[i] - '0'; //zamiana znaku na liczbe
      if(tmp > 9) break; //jesli zamieniony znak nie jest cyfra to przerywamy petle
      cyfry[ilosc - i - 1] = tmp;//dla ulatwienia konwersji cyfry zapisane sa w odwrotnej kolejnosci
   }

   str[0] = '\0'; //aby slowa byly dopisywane od poczatku lancucha str trzeba wpisac na pierwszej pozycji znak '\0'
   if(ilosc == 0) strcat(str, "zero "); //brak cyfr czyli zero
   else
   {
      //w tej petli licznik 'i' reprezentuje rzad wielkosci ( 1 - tysiace, 2 - miliony itp.)
      //konwersje zaczynamy od rzedu najwiekszego
      //cyfra jednosci dla rzedu 'i' ma pozycje 3*i, dziesiatek 3*i+1, setek 3*i+2
      for(int i = (ilosc - 1) / 3; i >= 0; i--)
      {
         forma = sdj(cyfry[3 * i + 2], cyfry[3 * i + 1], cyfry[3 * i], str); //wpisze setki, dziesiatki i jednosci oraz sprawdzi forme zdaniowa
         strcat(str, wielkosci[i][forma]);//wpisze nazwe wielkosci w odpowiedniej formie zdaniowej
      }
   }
   return ilosc;
}

int main(int argc, char *argv[])
{
   char liczba[80];
   char txt[400] = "";
   char znak;
   int poprawnych;

   do
   {
      printf("Podaj liczbe (maksymalnie 27 cyfr)\n");
      scanf("%s", liczba); //wczytanie liczby
      poprawnych = slownie(liczba, txt); //zamiana liczby na zapis slowny

      //jesli nie wszystkie znaki byly poprawne
      if(poprawnych < strlen(liczba)) printf("podana liczba jest nieprawidlowa");
      //jesli poprawnie skonwertowano liczbe, to wypisz ja
      else printf("%s", txt);
      printf("\nKonwertowac nastepna liczbe ? [T] - tak: ");
      fflush(stdin);
      scanf("%c", &znak);
      printf("\n");
   }
   while((znak == 't') || (znak == 'T')); //petla powtarza sie dopuki wczytany znak to litera "t"
   return 0;
}		
