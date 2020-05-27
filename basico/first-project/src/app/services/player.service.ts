import { Injectable } from '@angular/core';
import { AngularFireList, AngularFireDatabase } from 'angularfire2/database';
import { Player } from '../interfaces/player';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PlayerService {
  private playersDb: AngularFireList<Player>;

  constructor(private db: AngularFireDatabase) {
    // Popular
    // Accediendo a la base de datos
    // Se debe indicar la tabla
    this.playersDb = this.db.list('/players', ref => ref.orderByChild('name'));
  }

  getPlayers(): Observable<Player[]> {
    // Obtener una snapshot de los datos en un momento dado
    return this.playersDb.snapshotChanges().pipe(
      map(changes => {
        return changes.map( c => ({$key: c.payload.key, ...c.payload.val()}));
      })
    );
  }

  /**
   * Add the player
   * @param player Player interface
   */
  addPlayer(player: Player) {
    return this.playersDb.push(player);
  }

  deletePlayer(id: string) {
    this.db.list('/players').remove(id);
  }

  editPlayer(newPlayer: Player) {
    const $key = newPlayer.$key;
    delete(newPlayer.$key);
    console.log(newPlayer);
    this.db.list('/players').update($key, newPlayer);
  }
}
