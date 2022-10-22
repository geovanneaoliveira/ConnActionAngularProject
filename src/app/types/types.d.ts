export type User = {
    id: number;
    nome: string;
    login: string;
    senha: string;
    fotoPerfil: string;
    authdata?: string;
}

export type Tag = {
    id: number;
    nome: string;
}

export type Evento = {
    id: number;
    nome: string;
    data: Date;
    nomeOrganizacao: string;
    pessoasEvento: string[];
    tagsEvento: string[];
    patrocinadores: string[];
}

export type Cadastro = {
    nome: string,
    sobrenome : string,
    telefone: string
    cpf : string,
    login : string,
    senha : string,
    fotoPerfil: string | ArrayBuffer | null
}

export type Contribuicao = {
    id : number;
    data : string;
    valor : number;
    nomeUsuario : string;
    sobrenome : string;
    nomeOrg : string;
}

export type Organizacao = {
    id: number;
    nomeOrg: string;
    descricao: string;
    nomeSupervisor: string;
    sobrenomeSupervisor: string;
    orgFoto: string;
    cnpj: string;
    eventos: Evento[];
    contribuicoes: number;
    tags: string[];
}