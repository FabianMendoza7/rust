(function() {var implementors = {
"bytes":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bytes/struct.Bytes.html\" title=\"struct bytes::Bytes\">Bytes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"bytes/struct.BytesMut.html\" title=\"struct bytes::BytesMut\">BytesMut</a>"]],
"lock_api":[["impl&lt;R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a>, G: <a class=\"trait\" href=\"lock_api/trait.GetThreadId.html\" title=\"trait lock_api::GetThreadId\">GetThreadId</a>, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"lock_api/struct.ReentrantMutex.html\" title=\"struct lock_api::ReentrantMutex\">ReentrantMutex</a>&lt;R, G, T&gt;"],["impl&lt;R: <a class=\"trait\" href=\"lock_api/trait.RawMutex.html\" title=\"trait lock_api::RawMutex\">RawMutex</a>, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"lock_api/struct.Mutex.html\" title=\"struct lock_api::Mutex\">Mutex</a>&lt;R, T&gt;"],["impl&lt;R: <a class=\"trait\" href=\"lock_api/trait.RawRwLock.html\" title=\"trait lock_api::RawRwLock\">RawRwLock</a>, T: ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a> + <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"lock_api/struct.RwLock.html\" title=\"struct lock_api::RwLock\">RwLock</a>&lt;R, T&gt;"]],
"parking_lot":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"parking_lot/struct.Once.html\" title=\"struct parking_lot::Once\">Once</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"parking_lot/struct.Condvar.html\" title=\"struct parking_lot::Condvar\">Condvar</a>"]],
"parking_lot_core":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"parking_lot_core/struct.SpinWait.html\" title=\"struct parking_lot_core::SpinWait\">SpinWait</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"parking_lot_core/struct.UnparkResult.html\" title=\"struct parking_lot_core::UnparkResult\">UnparkResult</a>"]],
"proc_macro2":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"proc_macro2/struct.TokenStream.html\" title=\"struct proc_macro2::TokenStream\">TokenStream</a>"]],
"smallvec":[["impl&lt;A: <a class=\"trait\" href=\"smallvec/trait.Array.html\" title=\"trait smallvec::Array\">Array</a>&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"smallvec/struct.SmallVec.html\" title=\"struct smallvec::SmallVec\">SmallVec</a>&lt;A&gt;"]],
"syn":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Mod.html\" title=\"struct syn::token::Mod\">Mod</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Caret.html\" title=\"struct syn::token::Caret\">Caret</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/struct.BoundLifetimes.html\" title=\"struct syn::BoundLifetimes\">BoundLifetimes</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Auto.html\" title=\"struct syn::token::Auto\">Auto</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.DotDotEq.html\" title=\"struct syn::token::DotDotEq\">DotDotEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Ref.html\" title=\"struct syn::token::Ref\">Ref</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Type.html\" title=\"struct syn::token::Type\">Type</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Macro.html\" title=\"struct syn::token::Macro\">Macro</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Dollar.html\" title=\"struct syn::token::Dollar\">Dollar</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.In.html\" title=\"struct syn::token::In\">In</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.CaretEq.html\" title=\"struct syn::token::CaretEq\">CaretEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Let.html\" title=\"struct syn::token::Let\">Let</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.StarEq.html\" title=\"struct syn::token::StarEq\">StarEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Virtual.html\" title=\"struct syn::token::Virtual\">Virtual</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Slash.html\" title=\"struct syn::token::Slash\">Slash</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Unsafe.html\" title=\"struct syn::token::Unsafe\">Unsafe</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Question.html\" title=\"struct syn::token::Question\">Question</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Trait.html\" title=\"struct syn::token::Trait\">Trait</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Dyn.html\" title=\"struct syn::token::Dyn\">Dyn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Default.html\" title=\"struct syn::token::Default\">Default</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Impl.html\" title=\"struct syn::token::Impl\">Impl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Minus.html\" title=\"struct syn::token::Minus\">Minus</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.RArrow.html\" title=\"struct syn::token::RArrow\">RArrow</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Match.html\" title=\"struct syn::token::Match\">Match</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Shr.html\" title=\"struct syn::token::Shr\">Shr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Lt.html\" title=\"struct syn::token::Lt\">Lt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Percent.html\" title=\"struct syn::token::Percent\">Percent</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"syn/enum.PathArguments.html\" title=\"enum syn::PathArguments\">PathArguments</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Plus.html\" title=\"struct syn::token::Plus\">Plus</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Enum.html\" title=\"struct syn::token::Enum\">Enum</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Le.html\" title=\"struct syn::token::Le\">Le</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.EqEq.html\" title=\"struct syn::token::EqEq\">EqEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Fn.html\" title=\"struct syn::token::Fn\">Fn</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Pub.html\" title=\"struct syn::token::Pub\">Pub</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.ShrEq.html\" title=\"struct syn::token::ShrEq\">ShrEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Final.html\" title=\"struct syn::token::Final\">Final</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.As.html\" title=\"struct syn::token::As\">As</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Static.html\" title=\"struct syn::token::Static\">Static</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.PercentEq.html\" title=\"struct syn::token::PercentEq\">PercentEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Unsized.html\" title=\"struct syn::token::Unsized\">Unsized</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Semi.html\" title=\"struct syn::token::Semi\">Semi</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.LArrow.html\" title=\"struct syn::token::LArrow\">LArrow</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Yield.html\" title=\"struct syn::token::Yield\">Yield</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Bracket.html\" title=\"struct syn::token::Bracket\">Bracket</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Eq.html\" title=\"struct syn::token::Eq\">Eq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Do.html\" title=\"struct syn::token::Do\">Do</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Else.html\" title=\"struct syn::token::Else\">Else</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Move.html\" title=\"struct syn::token::Move\">Move</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Loop.html\" title=\"struct syn::token::Loop\">Loop</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.PlusEq.html\" title=\"struct syn::token::PlusEq\">PlusEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Comma.html\" title=\"struct syn::token::Comma\">Comma</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Tilde.html\" title=\"struct syn::token::Tilde\">Tilde</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.AndAnd.html\" title=\"struct syn::token::AndAnd\">AndAnd</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.MinusEq.html\" title=\"struct syn::token::MinusEq\">MinusEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.SelfValue.html\" title=\"struct syn::token::SelfValue\">SelfValue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Not.html\" title=\"struct syn::token::Not\">Not</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Override.html\" title=\"struct syn::token::Override\">Override</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Union.html\" title=\"struct syn::token::Union\">Union</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Ne.html\" title=\"struct syn::token::Ne\">Ne</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.DotDotDot.html\" title=\"struct syn::token::DotDotDot\">DotDotDot</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Ge.html\" title=\"struct syn::token::Ge\">Ge</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Struct.html\" title=\"struct syn::token::Struct\">Struct</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.AndEq.html\" title=\"struct syn::token::AndEq\">AndEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Or.html\" title=\"struct syn::token::Or\">Or</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Colon.html\" title=\"struct syn::token::Colon\">Colon</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.ShlEq.html\" title=\"struct syn::token::ShlEq\">ShlEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Become.html\" title=\"struct syn::token::Become\">Become</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Gt.html\" title=\"struct syn::token::Gt\">Gt</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.At.html\" title=\"struct syn::token::At\">At</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Brace.html\" title=\"struct syn::token::Brace\">Brace</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Where.html\" title=\"struct syn::token::Where\">Where</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Star.html\" title=\"struct syn::token::Star\">Star</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.SlashEq.html\" title=\"struct syn::token::SlashEq\">SlashEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.SelfType.html\" title=\"struct syn::token::SelfType\">SelfType</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.OrEq.html\" title=\"struct syn::token::OrEq\">OrEq</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Crate.html\" title=\"struct syn::token::Crate\">Crate</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.If.html\" title=\"struct syn::token::If\">If</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.For.html\" title=\"struct syn::token::For\">For</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.And.html\" title=\"struct syn::token::And\">And</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Group.html\" title=\"struct syn::token::Group\">Group</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Typeof.html\" title=\"struct syn::token::Typeof\">Typeof</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Try.html\" title=\"struct syn::token::Try\">Try</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Underscore.html\" title=\"struct syn::token::Underscore\">Underscore</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Return.html\" title=\"struct syn::token::Return\">Return</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Pound.html\" title=\"struct syn::token::Pound\">Pound</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Const.html\" title=\"struct syn::token::Const\">Const</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Mut.html\" title=\"struct syn::token::Mut\">Mut</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/struct.Generics.html\" title=\"struct syn::Generics\">Generics</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Continue.html\" title=\"struct syn::token::Continue\">Continue</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Dot.html\" title=\"struct syn::token::Dot\">Dot</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Shl.html\" title=\"struct syn::token::Shl\">Shl</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Use.html\" title=\"struct syn::token::Use\">Use</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.DotDot.html\" title=\"struct syn::token::DotDot\">DotDot</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.While.html\" title=\"struct syn::token::While\">While</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Super.html\" title=\"struct syn::token::Super\">Super</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Break.html\" title=\"struct syn::token::Break\">Break</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Await.html\" title=\"struct syn::token::Await\">Await</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Priv.html\" title=\"struct syn::token::Priv\">Priv</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Async.html\" title=\"struct syn::token::Async\">Async</a>"],["impl&lt;T, P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/punctuated/struct.Punctuated.html\" title=\"struct syn::punctuated::Punctuated\">Punctuated</a>&lt;T, P&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Paren.html\" title=\"struct syn::token::Paren\">Paren</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.OrOr.html\" title=\"struct syn::token::OrOr\">OrOr</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Abstract.html\" title=\"struct syn::token::Abstract\">Abstract</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.FatArrow.html\" title=\"struct syn::token::FatArrow\">FatArrow</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Box.html\" title=\"struct syn::token::Box\">Box</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.Extern.html\" title=\"struct syn::token::Extern\">Extern</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"syn/token/struct.PathSep.html\" title=\"struct syn::token::PathSep\">PathSep</a>"]],
"tokio":[["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tokio/fs/struct.DirBuilder.html\" title=\"struct tokio::fs::DirBuilder\">DirBuilder</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tokio/task/struct.LocalSet.html\" title=\"struct tokio::task::LocalSet\">LocalSet</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tokio/sync/struct.RwLock.html\" title=\"struct tokio::sync::RwLock\">RwLock</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> + ?<a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/marker/trait.Sized.html\" title=\"trait core::marker::Sized\">Sized</a>,</span>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tokio/fs/struct.OpenOptions.html\" title=\"struct tokio::fs::OpenOptions\">OpenOptions</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tokio/task/struct.JoinSet.html\" title=\"struct tokio::task::JoinSet\">JoinSet</a>&lt;T&gt;"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tokio/sync/struct.OnceCell.html\" title=\"struct tokio::sync::OnceCell\">OnceCell</a>&lt;T&gt;"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"enum\" href=\"tokio/time/enum.MissedTickBehavior.html\" title=\"enum tokio::time::MissedTickBehavior\">MissedTickBehavior</a>"],["impl <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tokio/sync/struct.Notify.html\" title=\"struct tokio::sync::Notify\">Notify</a>"],["impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a> for <a class=\"struct\" href=\"tokio/sync/struct.Mutex.html\" title=\"struct tokio::sync::Mutex\">Mutex</a>&lt;T&gt;<span class=\"where fmt-newline\">where\n    T: <a class=\"trait\" href=\"https://doc.rust-lang.org/1.74.0/core/default/trait.Default.html\" title=\"trait core::default::Default\">Default</a>,</span>"]]
};if (window.register_implementors) {window.register_implementors(implementors);} else {window.pending_implementors = implementors;}})()