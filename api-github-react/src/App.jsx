import "./App.css";

function App() {
  return (
    <>
      <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col-xs-12">
            <div align="center" classNameName="well well-sm">
              <div id="formulario">
                <div classNameName="input-group input-group-lg">
                  <span classNameName="input-group-addon" id="sizing-addon1">
                    @
                  </span>
                  <input
                    type="text"
                    classNameName="form-control input-busca"
                    placeholder="Usuário"
                    aria-describedby="sizing-addon1"
                  />
                </div>
                <button type="submit" classNameName="btn btn-success">
                  Buscar
                </button>
                <figure classNameName="img">
                  <img
                    classNameName="img-responsive img-circle avatar"
                    src=""
                    alt=""
                  />
                </figure>
                <div classNameName="texto">
                  <h4 id="nome"></h4>
                  <h4 id="usuario"></h4>
                  <h4 id="seguidores"></h4>
                  <h4 id="repositorio"></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-xs-12">
            <div align="center" className="well well-sm">
              <button className="btn btn-danger buscaRepositorios">
                Repositórios
              </button>
              <button className="btn btn-danger visitados">
                Mais visitados
              </button>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="insereRepositorio"></td>
                  </tr>
                </tbody>
              </table>

              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Nome</th>
                    <th scope="col">Repositórios</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td id="insereNomeRep"></td>
                    <td id="insereRepositorioVisitado"></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
