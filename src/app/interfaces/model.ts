import { Printable } from '../utils/print'
import { Comparable } from './comparable'

export interface Model<T> extends Printable, Comparable<T> {
}
