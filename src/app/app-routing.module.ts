import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BlockchainViewerComponent } from "./pages/blockchain-viewer/blockchain-viewer.component";
import { CreateTransactionComponent } from "./pages/create-transaction/create-transaction.component";
import { SettingsComponent } from "./pages/settings/settings.component";

const routes: Routes = [
  { path: "", component: BlockchainViewerComponent },
  { path: "settings", component: SettingsComponent },
  { path: "new/transaction", component: CreateTransactionComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
