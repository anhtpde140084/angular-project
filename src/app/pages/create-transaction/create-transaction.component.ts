import { Component, OnInit } from "@angular/core";
import { BlockchainService } from "src/app/services/blockchain.service";
import { Transaction } from "SavjeeCoin/src/blockchain";

@Component({
  selector: "app-create-transaction",
  templateUrl: "./create-transaction.component.html",
  styleUrls: ["./create-transaction.component.scss"],
})
export class CreateTransactionComponent implements OnInit {
  public newTx;
  public ownWalletKey;

  constructor(private blockchainService: BlockchainService) {
    this.ownWalletKey = blockchainService.walletKeys[0];
  }

  ngOnInit(): void {
    this.newTx = new Transaction();
  }

  createTransaction() {
    const newTx = this.newTx;
    // Set the FROM address and sign the transaction
    newTx.fromAddress = this.ownWalletKey.publicKey;
    newTx.signTransaction(this.ownWalletKey.keyObj);

    this.blockchainService.addTransaction(this.newTx);

    this.newTx = new Transaction();
  }
}
