import { Route, Routes } from "react-router-dom";
import { CalisanListe } from "./CalisanListe";

import React, { Component } from "react";

export class CalisanEkle extends Component {
  render() {
    return (
      <Routes>
    
        <Route exact path="/CalisanListe" component={CalisanListe} />
        <Route exact path="/CalisanEkle" component={CalisanEkle} />
      </Routes>
    );
  }
  renderCalisanEkle() {
    return (
      <>
        <form>
          <div className="form-group row">
            <input type="hidden" name="id" />
          </div>
          <div className="form-group row">
            <label className="control-label col-md-12" htmlFor="Ad" /> Ad-Soyad
            <div className="col-md-4">
              <input className="form-control" type="text" name="Ad" required />
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-md-12" htmlFor="cinsiyet">
              {" "}
              Cinsiyet{" "}
            </label>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                name="cinsiyet"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-md-12" htmlFor="departman">
              {" "}
              Departman{" "}
            </label>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                name="departman"
                required
              />
            </div>
          </div>
          <div className="form-group row">
            <label className="control-label col-md-12" htmlFor="Sehir">
              {" "}
              Sehir{" "}
            </label>
            <div className="col-md-4">
              <input
                className="form-control"
                type="text"
                name="Sehir"
                required
              />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn">
              EKLE
            </button>
          </div>
        </form>
      </>
    );
  }
}
