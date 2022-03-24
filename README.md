# pretoria-white

react native - stack navigation kata


1. create a react native project
2. add this navigation tree using stack navigation
    * main
      * sales
        + new sale
        + new payment
      * clients
        + client list > client detail
      * reports
        + sales per month
        + sales per product
 
the app must initiate on main screen.

from main screen, the user may move to sales screen, clients screen or reports screen.

from sales screen, the user may move to new sale screen or payment screen and go back to sales screen.

from clients screen, the user may move to client list and go back to clients screen.

from client list screen, the user may move to client detail and go back to client list.

from reports screen,  the client may move to sales per month and go back to reports, or may move to sales per product and go back to reports.
