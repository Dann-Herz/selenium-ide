// Licensed to the Software Freedom Conservancy (SFC) under one
// or more contributor license agreements.  See the NOTICE file
// distributed with this work for additional information
// regarding copyright ownership.  The SFC licenses this file
// to you under the Apache License, Version 2.0 (the
// "License"); you may not use this file except in compliance
// with the License.  You may obtain a copy of the License at
//
//   http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing,
// software distributed under the License is distributed on an
// "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
// KIND, either express or implied.  See the License for the
// specific language governing permissions and limitations
// under the License.

import emit from './emit'
import prettify from './prettify'
import { registerPreprocessors, registerCommandEmitter } from './register'
import Hook from './hook'
import * as find from './find'
import render from './render'
import * as parsers from './parsers'

export * from './defaults'
export * from './emit'
export * from './find'
export * from './hook'
export * from './parsers'
export * from './preprocessor'
export * from './prettify'
export * from './register'
export * from './render'
export * from './utils'

export default {
  emit,
  prettify,
  register: {
    preprocessors: registerPreprocessors,
    emitter: registerCommandEmitter,
  },
  hook: Hook,
  find,
  render,
  parsers,
}
