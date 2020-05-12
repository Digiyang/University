#ifndef CCUSTOMER_H
    #define CCUSTOMER_H CCUSTOMER_H

    #include <string>
    #include <vector>
    #include <fstream>
    #include "cdate.h"
    #include "caddress.h"
    #include "caccount.h"

    using namespace std;



    class CCustomer
    {
        long id;
        string name;
        CDate birthday;
        CAddress address;
        vector<CAccount *> accountList;

        public:
            CCustomer();
            CCustomer(long i, string n, CDate b, CAddress a);
            ~CCustomer();

            long getID()     const {return id;}
            string getName() const {return name;}

            void addAccount(CAccount *newAccount);
            int load(ifstream &source);
            void print() const;
            void printName() const;
    };

#endif
