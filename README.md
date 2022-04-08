# Buzz42er.guthub.io
Jure Ereš Portfolio

Ukratko:
Ovo je stranica preko koje će biti povezani moji projekti i životopis. Link ove stranice nalaziti će se u pravilu isključivo na mome životopisu. 

tehničke značajke:
    -dekoracija:
Postoje 2 vrste div elemenata koje su isključivo dekorativnog tipa
        -pozadinska slika - .pozadinskaSlika (class)
        -razdjelnik - .razdjelnik (class)
To su repetativni elementi koji će se ponavljati kroz stranicu i u pravilu će imati ista svojstva. U slučaju kada je potrebno napraviti preinaku na jednom od npr. 5 div elemenata koji nose class .pozadinskaSlika taj div element će biti preimenovan i dobiti će svoja svojstva u CSS file-u. .razdjelnik se u pravilu ne bi trebao mijenjati no u slučaju da će biti potrebe koristiti će se isti postupak.

manji dekorativni elementi:
    - slike - unutar div elementa, import-aju se unutar CSS file-a 
    - 

Postupak preimenovanja predodrešenih class-a: (vrijedi za sve class, koje u slučaju gdje ih ima više, a jedna treba biti mjenjana)
    - prefix imena class-e ostaje (pr. .razdjelnik = prefix ) i na njega s velikim početnim slovom se nadodaje ime promjene koje mora biti opisano jednom riječi
    - ukoliko postoji više od jednog elementa iste class-e koje treba raditi istu promjenu elementu se mjenja ime class-e u ono ime kojega je dobio prvi element s istom tom promjenom (pr. .razdjelnikSjena)
    - ukoliko se radi o istoj promjeni ni efekt je drugačiji, dodaje se jednorječni opis sa velikim prvim početnim slovom za tu class-u kojoj je potrebna izmjena (pr. .razdjelnikSjenaGore)
    - za sve daljnje preinake prati se isti algoritam, ukoliko postoji promjena orginalne class-e sa različitim konačnim efektom, dodaje se novi jednoriječni opis (pr . razdjelnikSjenaGorePlava...Fix...)

cilj je ne imati previše raznolikih elemenata, držati se jednostavnih elemenata koji su repetativni, no u malim količinama

    -struktura:
Koristimo se elementima iz HTML5:
        -div element bez class i id oznaka- strukturira floorplan stranice, sadrži article element
        -header - za naslov
        -nav - za navigaciju stranice
        -article - sadrži section elemente i naslove tekstova koje section element sadrži
        -section - za tekstovni sadržaj
        -footer - za shortcut-e opće informacije i copyright
        - div element se koristi u dekorativne svrhe u pravilu ili u slučaju kada nijedan od gore navedenih elemenata ne odgovara namjeni
Ostale vrste strukturnih elemenata:
(svi se pozicioniraju preko div elementa)
    - table - sadržaj koji je lakše prikazati u dvije međusobno okomite diagonale
    - list-e - sadržaj kojeg je lakše konzumirati u natuknicama
    - form-e - ispunjavanje podataka za prijavu i slično
    - progress bar - dekorativni sadržaj, vizualno prikazivanje progress-a


