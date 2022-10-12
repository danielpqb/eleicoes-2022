import db from "../../src/database.js";
import data from "./electeds-brazil.json" assert { type: "json" };

async function insertAllCandidates() {
  data.abr.forEach(async (state) => {
    const state_name = state.nmabr;
    const state_uf = state.cdabr;
    const state_votes = Number(parseInt(state.tvap));

    state.cand.forEach(async (candidate) => {
      const number = Number(parseInt(candidate.n));
      const id_cand = Number(parseInt(candidate.sqcand));
      const name = candidate.nm;
      const alias = candidate.nmu;
      const party = candidate.sgp;
      const votes = Number(parseInt(candidate.vap));

      try {
        await db.query(
          "INSERT INTO elected_candidates (number, identifier, name, alias, party, votes, state_name, state_uf, state_votes) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9);",
          [
            number,
            id_cand,
            name,
            alias,
            party,
            votes,
            state_name,
            state_uf,
            state_votes,
          ]
        );
      } catch (error) {
        console.log(error);
      }
    });
  });
}

insertAllCandidates();
