import { Component, OnInit } from '@angular/core';
import { Wallet } from '../wallet';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.css']
})
export class WalletComponent implements OnInit {

  wallet: Wallet = {
    purseNumber: 1005245,
    amount: 100
  };

  constructor() { }

  ngOnInit() {
  }

}
