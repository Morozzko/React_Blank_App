type SuperType = string

interface ICallback {
  (value: string): void
}

type CallbackType = (value: string) => void

const callback = (value: string) => {
  console.log(value)
}

const cb1: ICallback = callback
const cb2: CallbackType = callback

interface IUpdated {
  name: string
}

interface IUpdated {
  age: number
}

const updated: IUpdated = {
  name: 'token',
  age: 5,
}

type ParentType = {
  name: string
}

interface IParent {
  surname: string
}

type ChildType = {
  age: number
} & ParentType &
  IParent

const child2: ChildType = {
  age: 1,
  name: '',
  surname: '',
}

interface IChild extends IParent, ParentType {
  city: string
}

const child1: IChild = {
  city: '',
  surname: '',
  name: '',
}

class A implements ParentType, IParent {
  name: string
  surname: string

  constructor() {
    this.name = 'token'
    this.surname = 'token'
  }
}

type AType = {
  type: 'A'
  obj: {
    name: string
  }
}

type BType = {
  type: 'B'
  obj: {
    age: number
  }
}

type CType = AType | BType

const C: CType = {
  type: 'A',
  obj: {
    name: '',
  },
}
const D: CType = {
  type: 'B',
  obj: {
    age: 1,
  },
}
