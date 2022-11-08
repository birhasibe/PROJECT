import React, { Component } from "react";

export class CalisanListe extends Component {
  displayName = "Calisanlarin Listesi";

  render() {
    let contents = this.renderCalisanTablo();
    return (
      <div>
        <h1> Sirket Calisanlarinin Listesi</h1>
        <button className="btn btn">
          <link to="/CalisanEkle"> Calisan Ekle</link>
        </button>
        <hr />
        {contents}
      </div>
    );
  }
  renderCalisanTablo() {
    return (
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th> Ad-Soyad</th>
            <th>Cinsiyet</th>
            <th>Departman</th>
            <th>Sehir</th>
          </tr>
        </thead>
      </table>
    );
  }
}
